import React from 'react';
//import { TextItem, TextType, AnswerText } from '@components/AskAnswer/AskElement/AnswerText';

import { ScAddr, ScConstruction, ScLinkContent, ScLinkContentType, ScType, ScClient, ScTemplate,} from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';

import { doCommand } from './command';
import { searchAddrById } from '@api/sc/search/search';
import { Action } from '@api/sc/actions/Action';
import { TLanguage, langToKeynode, snakeToCamelCase } from 'ostis-ui-lib';

const getLanguage = async (lang: TLanguage) => {
  const keynodes = await scUtils.searchKeynodes(langToKeynode[lang]);
  return keynodes[snakeToCamelCase(langToKeynode[lang])];
};

export const getWhatIsIMS = async () => {
  const { knowledgeBaseIMS } = await scUtils.searchKeynodes('knowledge_base_IMS');
  return getDescriptionByAddr(knowledgeBaseIMS.value);
};

export const getHistoryOfIMS = async () => {
  const { historyOfDevelopmentIMS } = await scUtils.searchKeynodes('history_of_development_IMS');
  return getDescriptionByAddr(historyOfDevelopmentIMS.value);
};

export const getWhatIsGraph = async () => {
  const { sectionQuestionsOnTheDisciplineMOIS } = await scUtils.searchKeynodes(
    'section_questions_on_the_discipline_MOIS',
  );
  return getDescriptionByAddr(sectionQuestionsOnTheDisciplineMOIS.value);
};

export const getWhatIsSingleton = async () => {
  const { singletone } = await scUtils.searchKeynodes('singletone');
  return getDescriptionByAddr(singletone.value);
};

export const getWhatIsSetTheory = async () => {
  const { setTheory } = await scUtils.searchKeynodes('set_theory');
  return getDescriptionByAddr(setTheory.value);
};

export const getDescriptionByAddr = async (elementAddr: number) => {
  const { uiMenuSummary } = await scUtils.searchKeynodes('ui_menu_summary');
  console.log("ui_menu_summary", uiMenuSummary);

  const commandResult = await doCommand(uiMenuSummary.value, elementAddr);
  console.log("commandResult", commandResult);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.action;
  const answer = await scUtils.getResult(new ScAddr(questionNode));

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  return String(content);
};

// export const getDescriptionById = async (id: string, lang: TLanguage) => {

//   // if (id == "что такое синглтон?") return "Синглтон - это множество, состоящее из одного элемента, которое имеет мощность равную 1.";
//   // if (id == "what types of connections are there?") return "Connections can be binary and nonbinary, oriented and nonoriented";
//   // if (id == "какими свойствами обладает отношение цели") return "Отношение цели обладает свойствами бинарности, ориентированности, асимметричности, антирефлексивности и антитранзитивности.";
//   // if (id == "") return "";


//   const action = new Action('action_reply_to_message');
//   const constr = new ScConstruction();
//   constr.createLink(ScType.LinkConst, new ScLinkContent(id, ScLinkContentType.String));
//   const [linkAddr] = await client.createElements(constr);

//   const { conceptTextFile } = await scUtils.searchKeynodes('concept_text_file');

//   const textLinkTemplate = new ScTemplate();
//   textLinkTemplate.triple(conceptTextFile, ScType.EdgeAccessVarPosPerm, linkAddr);

//   const res = await client.templateGenerate(textLinkTemplate);

//   await action.addArgs(linkAddr);

//   const answerAddr = await action.initiate();

//   if (!answerAddr) return null;

//   const answerAlias = '_answerLink';
//   const answerLinkTemplate = new ScTemplate();
//   answerLinkTemplate.triple(answerAddr, ScType.EdgeAccessVarPosPerm, [
//     ScType.LinkVar,
//     answerAlias,
//   ]);

//   const answerLink = await client.templateSearch(answerLinkTemplate);

//   if (!answerLink.length) return null;

//   const answerLinkAddr = answerLink[0].get(answerAlias);


//   const contents = await client.getLinkContents([answerLinkAddr]);
//   const content = String(contents[0].data);
//   //const content = 'Отношение определяется как подмножество декартового произведения множества М на себя некоторое количество раз. В более широком смысле отношение - это математическая структура, формально определяющая свойства различных объектов и их взаимосвязи. Отношения разбиваются на класс временных и постоянных связок, класс постоянных связей, класс временных связей|, класс равномощных связок, класс разномощных связок, небинарное отношение, бинарное отношение, неориентириванное отношение, ориентированное отношение, неролевое отношение, ролевое отношение.|';


//   //Множество включает в себя попарно пересекающиеся множества, ответ, эквивалентность задач, используемый пользователем язык, sc.s-модификатор, внешний идентификатор, ответное действие, сущность. .';

//   // if (!content.includes('|')) {
//   //   return content;
//   // }
//   // else {
//   //   const answer: TextItem[] = [];
//   //   const textParts = content.split('|');
//   //   let textType: TextType;

//   //   for (let i = 0; i < textParts.length; i++) {
//   //     textType = (i % 2 === 0) ? 'normal' : 'collapsible';
//   //     answer.push({ type: textType, content: textParts[i] });
//   //   }
//   //   return answer;
//   // }\if (!content.includes('|')) {
  

//   // const answer: TextItem[] = [];
//   // const textParts = content.split('|');
//   // let textType: TextType;

//   // for (let i = 0; i < textParts.length; i++) {
//   //   textType = (i % 2 === 0) ? 'normal' : 'collapsible';
//   //   answer.push({ type: textType, content: textParts[i] });
//   // }
//   return content;
// };

export const getDescriptionById = async (id: string, lang: TLanguage) => {
  console.log("k");
  const action = new Action('action_reply_to_message');
  const constr = new ScConstruction();
  constr.createLink(ScType.LinkConst, new ScLinkContent(id, ScLinkContentType.String));
  const [linkAddr] = await client.createElements(constr);

  const { conceptTextFile } = await scUtils.searchKeynodes('concept_text_file');

  const textLinkTemplate = new ScTemplate();
  textLinkTemplate.triple(conceptTextFile, ScType.EdgeAccessVarPosPerm, linkAddr);

  const res = await client.templateGenerate(textLinkTemplate);

  await action.addArgs(linkAddr);

  const answerAddr = await action.initiate();

  if (!answerAddr) return null;

  const answerAlias = '_answerLink';
  const answerLinkTemplate = new ScTemplate();
  answerLinkTemplate.triple(answerAddr, ScType.EdgeAccessVarPosPerm, [
    ScType.LinkVar,
    answerAlias,
  ]);

  const answerLink = await client.templateSearch(answerLinkTemplate);

  if (!answerLink.length) return null;

  const answerLinkAddr = answerLink[0].get(answerAlias);


  const contents = await client.getLinkContents([answerLinkAddr]);
  const content = contents[0].data;

  return String(content);
};
