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
            name: 'dateCreated',
            type: 'date',
            title: 'dateCreated',
            options: {
                dateFormat: 'YYYY-MM-DD'
            }
        },
        
    ]
}