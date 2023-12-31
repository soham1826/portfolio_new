const project = {
    name:'project',
    title:'Project',
    type:'document',
    fields:[
        {
           name:"title",
           title:"Title",
           description:"Title of the Project",
           type:'string'

        },
        {
            name:"image",
            title:"Image",
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:"summary",
            title:"Summary",
            type:'text',
           
        },
        
        {
            name:"linktoSourceCode",
            title:"LinktoSourceCode",
            type:"url"
            
        },
        {
            name:"linktoDemo",
            title:"LinktoDemo",
            type:"url"
            
        },
        {
            name:"technologies",
            title:"Technologies",
            type:"array",
            of:[{type:"reference",to:{type:"skill"}}]

        },
        
        
    ]
}

export default project;