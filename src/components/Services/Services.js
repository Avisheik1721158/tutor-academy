// import React from 'react';
// import Service from '../Service/Service';

// const Services = () => {
//     const items = [
//         {
//             "id": 0,
//             "img": "https://www.thoughtco.com/thmb/NzS6TkT1LLDFaa9jtI9yA2AHrA0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-boy-writes-math-equations-on-chalkboard-168351254-5ad90020ba61770036501446.jpg",
//             "name": "Mathematics",
//             "details": "With educational modernization as the guiding ideology, I will study the modern teaching methods and new concepts on curriculum development in All high schools and universities"

//         },
//         {
//             "id": 1,
//             "img": "https://www.thoughtco.com/thmb/CZ2bTzyKt_3GocjnGLPjdBWnQtQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg",
//             "name": "Chemistry",
//             "details": "With educational modernization as the guiding ideology, I will study the modern teaching methods and new concepts on curriculum development in All high schools and universities"
//         },
//         {
//             "id": 2,
//             "img": "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip",
//             "name": "Physics",
//             "details": "With educational modernization as the guiding ideology, I will study the modern teaching methods and new concepts on curriculum development in All high schools and universities"
//         }

//     ]
//     return (
//         <div>
//             {
//                 items.map(item => <Service key={item.id} item={item} ></Service>)
//             }
//         </div>

//     );
// };

// export default Services;
import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const items = [
        {
            "id": 0,
            "img": "https://www.thoughtco.com/thmb/NzS6TkT1LLDFaa9jtI9yA2AHrA0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-boy-writes-math-equations-on-chalkboard-168351254-5ad90020ba61770036501446.jpg",
            "name": "Mathematics",
            "details": "With educational modernization as the guiding ideology, I will study the modern teaching methods and new concepts on curriculum development in All high schools and universities"

        },
        {
            "id": 1,
            "img": "https://www.thoughtco.com/thmb/CZ2bTzyKt_3GocjnGLPjdBWnQtQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg",
            "name": "Chemistry",
            "details": "With educational modernization as the guiding ideology, I will study the modern teaching methods and new concepts on curriculum development in All high schools and universities"
        },
        {
            "id": 2,
            "img": "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip",
            "name": "Physics",
            "details": "With educational modernization as the guiding ideology, I will study the modern teaching methods and new concepts on curriculum development in All high schools and universities"
        }

    ]
    return (
        <div>
            {
                items.map(item => <Service key={item.id} item={item} ></Service>)
            }
        </div>

    );
};

export default Services;



