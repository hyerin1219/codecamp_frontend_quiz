import { gql, useMutation, useQuery } from '@apollo/client';
import { IMutation, IMutationCreateBoardArgs, IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types';

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            writer

            title
            contents
        }
    }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;

export default function ApolloCachePage(): JSX.Element {
    const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardArgs>(FETCH_BOARDS);
    const [createBoard] = useMutation(CREATE_BOARD);

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onclickSubmit = (): void => {
        void createBoard({
            variables: {
                createBoardInput: {
                    writer: 'dd',
                    password: 'ddd',
                    title: '메롱',
                    contents: '메롱~~~~~~메롱~~',
                },
            },
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            [...prev, data.createBoard];
                        },
                    },
                });
            },
        });
    };
    const onClickDelete = (boardId: string) => (): void => {
        void deleteBoard({
            variables: { boardId },
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev, { readField }) => {
                            const deletedId = data.deleteBoard; // 삭제 완료된 ID
                            const filteredPrev = prev.filter((el: any) => readField('_id', el) !== deletedId);
                            return [...filteredPrev];
                        },
                    },
                });
            },
        });
    };
    return (
        <>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span>{el.writer}</span>
                    <span>{el.title}</span>
                    <button onClick={onClickDelete(el._id)}>삭제 하기</button>
                </div>
            ))}
            <div>
                <button onClick={onclickSubmit}>등록 하기</button>
            </div>
        </>
    );
}
