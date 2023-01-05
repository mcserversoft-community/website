import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const res = await fetch(`https://api.github.com/orgs/mcserversoft-community/repos`, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
        }
    });

    const projects = await res.json();
    return {
        projects
    };
}
