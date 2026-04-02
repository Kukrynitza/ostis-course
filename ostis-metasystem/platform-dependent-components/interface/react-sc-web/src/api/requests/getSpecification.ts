import { ScAddr, ScTemplate, ScType } from 'ts-sc-client';
import { client, helper, scUtils } from '@api/sc';
import { Action } from '@api/sc/actions/Action';
import { searchAddrById } from '@api/sc/search/search';
import { CardComponentType } from '@components/Card/types';
import { InstallMethodType } from '@components/CardInfo/types';

export const searchSpecifications = async () => {
  const action = new Action('action_components_search');
  const agentResult = await action.initiate();

  if (!agentResult) return [];

  const specifications = await getSpecifications(agentResult);
  return specifications;
};

const getSpecifications = async (agentResult: ScAddr) => {
  const template = new ScTemplate();
  const resultAlias = '_result';
  template.triple(agentResult, ScType.VarPermPosArc, [ScType.VarNodeStructure, resultAlias]);
  const result = await client.searchByTemplate(template);
  const components = result.map((tuple) => tuple.get(resultAlias));
  return components;
};

export const searchComponentBySpecification = async (specification: ScAddr) => {
  const template = new ScTemplate();
  const componentAlias = '_component';
  const { conceptReusableComponent } = await scUtils.searchKeynodes('concept_reusable_component');
  template.triple(specification, ScType.VarPermPosArc, [ScType.VarNode, componentAlias]);
  template.triple(conceptReusableComponent, ScType.VarPermPosArc, [ScType.VarNode, componentAlias]);
  const result = await client.searchByTemplate(template);
  if (!result.length) {
    const errorStr = `Cannot find component of specification with ScAddr ${specification.value}`;
    console.error(errorStr);
    throw Error(errorStr);
  }
  return result[0].get(componentAlias);
};

export const searchComponentGit = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelComponentAddress } = await scUtils.searchKeynodes('nrel_component_address');
  const gitAlias = '_git';
  template.quintuple(
    component,
    ScType.VarCommonArc,
    [ScType.VarNodeLink, gitAlias],
    ScType.VarPermPosArc,
    nrelComponentAddress,
  );
  const result = await client.searchByTemplate(template);
  const gitScAddr = result.length ? result[0].get(gitAlias) : undefined;

  if (!gitScAddr) return undefined;

  const linkContents = await client.getLinkContents([gitScAddr]);
  return linkContents[0].data;
};

export const searchComponentInstallationMethod = async (component: ScAddr) => {
  const installationTypes: { [key: string]: InstallMethodType } = {
    concept_reusable_dynamically_installed_component:
      InstallMethodType.DynamicallyInstalledComponent,
    concept_reusable_component_requiring_restart: InstallMethodType.ReusableComponent,
  };
  const installationTypesScAddr = new Map<string, ScAddr>();

  const typesPromises = Object.keys(installationTypes).map(async (type) => {
    const scAddr = await searchAddrById(type);
    if (scAddr) installationTypesScAddr.set(type, scAddr);
  });

  await Promise.all(typesPromises);

  for (const [installationType, addr] of installationTypesScAddr.entries()) {
    const template = new ScTemplate();
    const resultAlias = '_result';
    template.triple(addr, ScType.VarPermPosArc, [component, resultAlias]);

    const result = await client.searchByTemplate(template);
    const resultScAddr = result.length ? result[0].get(resultAlias) : undefined;
    if (resultScAddr?.value === component.value) return installationTypes[installationType];
  }

  return undefined;
};

export const searchComponentSystemIdentifier = async (component: ScAddr) => {
  return helper.getSystemIdentifier(component);
};

export const searchComponentMainIdentifier = async (component: ScAddr, lang: string) => {
  return helper.getMainIdentifier(component, lang);
};

export const searchComponentAuthor = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelAuthors } = await scUtils.searchKeynodes('nrel_authors');
  const authorAlias = '_author';
  template.quintuple(
    component,
    ScType.VarCommonArc,
    [ScType.VarNode, authorAlias],
    ScType.VarPermPosArc,
    nrelAuthors,
  );
  const result = await client.searchByTemplate(template);
  const authorScAddr = result.length ? result[0].get(authorAlias) : undefined;
  if (!authorScAddr) {
    return undefined;
  }
  const authors = await searchAuthors(authorScAddr);
  return authors;
};

const searchAuthors = async (authorsNode: ScAddr) => {
  const template = new ScTemplate();
  const authorAlias = '_author';
  template.triple(authorsNode, ScType.VarPermPosArc, [ScType.VarNode, authorAlias]);
  const result = await client.searchByTemplate(template);
  const authors = await Promise.all(
    result.map(async (author) => await searchComponentSystemIdentifier(author.get(authorAlias))),
  );
  return authors;
};

export const searchComponentExplanation = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelExplanation } = await scUtils.searchKeynodes('nrel_explanation');
  const explanationAlias = '_explanation';
  template.quintuple(
    component,
    ScType.VarCommonArc,
    [ScType.VarNodeLink, explanationAlias],
    ScType.VarPermPosArc,
    nrelExplanation,
  );
  const result = await client.searchByTemplate(template);
  const explanationScAddr = result.length ? result[0].get(explanationAlias) : undefined;
  if (!explanationScAddr) return undefined;

  const linkContents = await client.getLinkContents([explanationScAddr]);
  return linkContents[0].data;
};

export const searchComponentNote = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelNote } = await scUtils.searchKeynodes('nrel_note');
  const noteAlias = '_note';
  template.quintuple(
    component,
    ScType.VarCommonArc,
    [ScType.VarNodeLink, noteAlias],
    ScType.VarPermPosArc,
    nrelNote,
  );
  const result = await client.searchByTemplate(template);
  const noteScAddr = result.length ? result[0].get(noteAlias) : undefined;
  if (!noteScAddr) return undefined;

  const linkContents = await client.getLinkContents([noteScAddr]);
  return linkContents[0].data;
};

export const searchComponentDependencies = async (component: ScAddr) => {
  const template = new ScTemplate();
  const { nrelComponentDependencies } = await scUtils.searchKeynodes('nrel_component_dependencies');
  const dependenciesAlias = '_dependencies';
  template.quintuple(
    component,
    ScType.VarCommonArc,
    [ScType.VarNode, dependenciesAlias],
    ScType.VarPermPosArc,
    nrelComponentDependencies,
  );
  const result = await client.searchByTemplate(template);
  if (!result.length) return new Map<ScAddr, string>();
  const deps = await searchDependencies(result[0].get(dependenciesAlias));
  return deps;
};

const searchDependencies = async (depsAddr: ScAddr) => {
  const template = new ScTemplate();
  const depAlias = '_dependency';
  template.triple(depsAddr, ScType.VarPermPosArc, [ScType.VarNode, depAlias]);
  const result = await client.searchByTemplate(template);
  const depsMap = new Map<ScAddr, string>();
  await Promise.all(
    result.map(async (author): Promise<void> => {
      const depAddr = author.get(depAlias);
      const depSystemIdentifier = await searchComponentSystemIdentifier(depAddr);
      depsMap.set(depAddr, depSystemIdentifier ? (depSystemIdentifier as string) : '...');
    }),
  );
  return depsMap;
};

export const searchComponentType = async (component: ScAddr) => {
  const types = {
    concept_reusable_kb_component: CardComponentType.knowledgeBase,
    concept_reusable_ps_component: CardComponentType.problemSolver,
    concept_reusable_ui_component: CardComponentType.interface,
    concept_reusable_embedded_ostis_system: CardComponentType.subSystem,
  };
  const typesScAddr = new Map<ScAddr, CardComponentType>();
  await Promise.all(
    Object.entries(types).map(async ([type, componentType]) => {
      const scAddr = await searchAddrById(type);
      if (scAddr) typesScAddr.set(scAddr, componentType);
    }),
  );

  for (const [addr, componentType] of typesScAddr.entries()) {
    const template = new ScTemplate();
    template.triple(addr, ScType.VarPermPosArc, component);
    const result = await client.searchByTemplate(template);
    if (result.length) {
      return componentType;
    }
  }
  return CardComponentType.unknown;
};
