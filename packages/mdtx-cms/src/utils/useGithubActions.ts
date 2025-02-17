import { Chain, ModelTypes } from '../github-gql-zeus/zeus';

export const useGithubActions = () => {
    const chain = (method: 'query' | 'mutation', token?: string) => {
        return Chain('https://api.github.com/graphql', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })(method);
    };
    const getOid = async (
        input: {
            repositoryName: string;
            repositoryOwner: string;
            branchName: string;
        },
        token: string,
    ) => {
        const response = await chain(
            'query',
            token,
        )({
            repository: [
                { name: input.repositoryName, owner: input.repositoryOwner },
                {
                    object: [
                        { expression: input.branchName },
                        {
                            '...on Commit': {
                                history: [{ first: 1 }, { nodes: { oid: true } }],
                            },
                        },
                    ],
                },
            ],
        });
        if (!response.repository?.object?.history.nodes) throw new Error('Bad response from getOid()');
        return response.repository?.object?.history.nodes;
    };
    const createCommitOnBranch = async (input: ModelTypes['CreateCommitOnBranchInput'], token: string) => {
        const response = await chain(
            'mutation',
            token,
        )({
            createCommitOnBranch: [
                { input },
                {
                    commit: {
                        oid: true,
                    },
                },
            ],
        });
        if (!response.createCommitOnBranch) throw new Error('Bad response from createCommitOnBranch()');
        return response.createCommitOnBranch;
    };
    const createBranch = async (input: ModelTypes['CreateRefInput'], token: string) => {
        const response = await chain(
            'mutation',
            token,
        )({
            createRef: [
                { input },
                {
                    ref: {
                        name: true,
                        target: {
                            '...on Commit': {
                                history: [{ first: 1 }, { nodes: { oid: true } }],
                            },
                        },
                    },
                },
            ],
        });
        if (!response.createRef) throw new Error('Bad response from createBranch()');
        return response.createRef;
    };
    const createPullRequest = async (input: ModelTypes['CreatePullRequestInput'], token: string) => {
        const response = await chain(
            'mutation',
            token,
        )({
            createPullRequest: [{ input }, { pullRequest: { headRefName: true } }],
        });
        if (!response.createPullRequest) throw new Error('Bad response from createPullRequest()');
        return response.createPullRequest;
    };
    return {
        getOid,
        createCommitOnBranch,
        createBranch,
        createPullRequest,
    };
};
