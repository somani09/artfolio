export const aboutPageData = [
    {   
        id:1,
        sectionHeading : "Technical Implementation using Next.js:",
        subSection :[
            {
                id:1,
                subHeading: "Server-side Rendering (SSR) and Static Site Generation (SSG):",
                points :[
                    {
                        id:1,
                        point:"Next.js's SSR and SSG capabilities were leveraged to enhance the performance and SEO of the portfolio app.",

                    },
                    {
                        id:2,
                        point:"By utilizing SSR, all the data for server-rendered components is pre-rendered and ready to be shown when the site is loaded. This improves the initial load time and SEO by providing information-rich HTML to search engine crawlers.",

                    },
                    {
                        id:3,
                        point:"SSG is used to generate static HTML files during the build process, ensuring that the content is readily available and can be served directly from a CDN, resulting in faster page rendering.",

                    }
                ]
            },
            {
                id:2,
                subHeading: "File-based Routing:",
                points :[
                    {
                        id:1,
                        point:"Next.js's built-in file-based routing system simplified the handling of dynamic routes, eliminating the need for explicit routing configuration.",
                    },
                    {
                        id:2,
                        point:"Each artist has their own dynamic page, with the route generated based on their name. This approach allows for better organization and navigation within the app.",    
                    }
            ]
            },
            {
                id:3,
                subHeading: "Automatic Code Splitting and Performance Optimization:",
                points :[
                        {
                            id:1,
                            point:"Next.js automatically splits the code into smaller bundles, ensuring that only the necessary parts are sent to the user when requested. This approach reduces the app's load time by loading only the required components.",    
                        },                 
                        {
                            id:2,
                            point:"Performance optimization features provided by Next.js contribute to improved loading speed and overall app performance.",
                        }
                ]
            }
        ]
    },
    {   
        id:2,
        sectionHeading: "Challenges faced during Development:",
        subSection :[
            {
                id:1,
                subHeading:"Implementing redux during Prerendering:",
                points:[
                    {                
                        id:1,
                        point:"Integrating Redux into the project posed challenges in maintaining a unified store across different pages.",
                    },
                    {                 
                        id:2,
                        point:  "The creation of separate Redux stores during page rendering hindered data persistence between pages.",
                    },
                    {                 
                        id:3,
                        point:  "Workarounds such as file-based caching were explored but couldn't be fully utilized in production due to write restrictions in the deployment build process. Investigation into concepts like hydration and context usage is underway to resolve this challenge.",
                    },                
                ]
            },
            {
                id:2,
                subHeading:"Image Components and Optimization:",
                points: [
                    {   
                        id:1,          
                        point:"Next.js's Image component, while powerful for image optimization, presented challenges related to cost implications and platform limitations.",
                    },
                    {   
                        id:2,              
                        point:  "To address this, a custom loader was developed to fetch and display images using Unsplash APIs.",
                    },
                    {   
                        id:3,              
                        point:  "This custom loader provides greater control and flexibility over image presentation while leveraging the customization options provided by Unsplash's APIs.",
                    },                
                ]
            }
        ]
    },
    {   
        id:2,
        sectionHeading: "Future Development:",
        subSection :[
            {
                id:1,
                subHeading:"Implementing a backend system:",
                points:[
                    {                
                        id:1,
                        point:"Login integration with Google and Meta: This feature will enable users to create accounts on the website, unlocking a range of interactive functionalities. Users can engage with artwork by liking, sharing, and commenting, fostering a vibrant community. Additionally, it facilitates communication among artists, encouraging idea-sharing and collaboration.",
                    },
                    {                 
                        id:2,
                        point:  "A database system that will enable the storage of user information and their interactions with the site. This backend will also provide a secure platform for artists to upload and showcase their images.",
                    },              
                ]
            },
            {
                id:2,
                subHeading:"Expanding the Community Page for Enhanced User Engagement and Collaboration:",
                points: [
                    {   
                        id:1,          
                        point:"User Engagement: Expand the community page to facilitate interaction and feedback among artists and photographers.",
                    },
                    {   
                        id:2,              
                        point:  "Collaboration Focus: Foster collaboration and idea-sharing within the artistic community.",
                    },
                    {   
                        id:3,              
                        point:  "Empowering Artists: The community page offers a supportive environment for artists and photographers to showcase their work, gain recognition, and utilize the platform as a personal portfolio.",
                    },                
                ]
            },
            {
                id:2,
                subHeading:"Enhancing Performance: Leveraging Redis and Redux:",
                points: [
                    {   
                        id:1,          
                        point:"Tntegrate Redis caching to optimize performance by storing frequently accessed data, reducing database queries, and improving response times.",
                    },
                    {   
                        id:2,              
                        point:  "Implement Redux to streamline state management, ensuring efficient data flow and enhancing overall performance and scalability of the application.",
                    },              
                ]
            }
        ]
    }
]