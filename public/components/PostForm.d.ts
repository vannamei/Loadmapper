import { FC } from 'react';
declare type Props = {
    data: {
        name: string;
        content: string;
    };
    btnFunc: () => void;
    inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const PostForm: FC<Props>;
export default PostForm;
//# sourceMappingURL=PostForm.d.ts.map