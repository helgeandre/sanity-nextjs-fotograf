export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffdc6eb860cdd2fae2e32a3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-fotograf-studio',
                  apiId: 'e29ad784-7e8e-49c4-9384-2323524bd1cc'
                },
                {
                  buildHookId: '5ffdc6eb49593881cef21dba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-fotograf',
                  apiId: '6cfc07f3-ed04-48ad-80c5-a7fb6eedd290'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helgeandre/sanity-nextjs-fotograf',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-fotograf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
