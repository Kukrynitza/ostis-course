import { forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';
import { ITextareaProps, refSetter, Textarea } from 'ostis-ui-lib';

export interface IFormTextareaProps extends ITextareaProps {
  name: string;
  control: Control<any, any>;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, IFormTextareaProps>(
  ({ name, children, control, ...restProps }, refFromProps) => {
    const { field } = useController({
      name,
      control,
    });

    return (
      <Textarea {...restProps} {...field} ref={refSetter(refFromProps, field.ref)}>
        {children}
      </Textarea>
    );
  },
);
