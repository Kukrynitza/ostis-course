import * as React from 'react';

export type TextType = 'normal' | 'collapsible';

interface Props {
  type: TextType;
  content: string;
}

export const CollapsibleText: React.FC<Props> = ({ type, content }) => {
  const [expanded, setExpanded] = React.useState(false);

  if (type === 'normal') {
    return <span>{content}</span>;
  }

  return (
    <>
      {expanded ? (
        <span onClick={() => setExpanded(false)} title="Свернуть текст">
          {content}
        </span>
      ) : (
        <span onClick={() => setExpanded(true)} title="Развернуть текст">
          ...
        </span>
      )}
    </>
  );
};

export interface TextItem {
  type: TextType;
  content: string;
}

// export const AnswerText: React.FC<{
//   items: TextItem[];
// }> = ({ items }) => {
//   return (
//     <div>
//       {items.map((item, index) => (
//         <CollapsibleText key={index} {...item} />
//       ))}
//     </div>
//   );
// };
