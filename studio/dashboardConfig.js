export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d8c0093dfe5f26f94dfce76',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dhj5isuq',
                  apiId: '4a20c6e1-af70-41b4-b77f-833593e1258b'
                },
                {
                  buildHookId: '5d8c0093a8470db0f5242853',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-58frotbe',
                  apiId: '8b39b6ce-5a7a-4b19-b30c-7d7c94577364'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trevorsmithdev/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-58frotbe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
