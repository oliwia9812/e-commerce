export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
        {
            name: 'image',
            type: 'image',
            hotspot: true
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'articleBody',
            type: 'string',
            title: 'articleBody',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 90
            }
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        },
        {
            name: 'dateCreated',
            type: 'date',
            title: 'dateCreated',
            options: {
                dateFormat: 'DD MMMM YYYY'
            }
        }
    ]
}