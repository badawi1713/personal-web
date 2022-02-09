import Image from 'next/image';
import React from 'react';

const BlogContent = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
        if (obj.bold) {
            modifiedText = <strong key={index}>{text}</strong>;
        }

        if (obj.italic) {
            modifiedText = <em key={index}>{text}</em>;
        }

        if (obj.underline) {
            modifiedText = <u key={index}>{text}</u>;
        }

        if (obj.code) {
            modifiedText = <pre className=' overflow-x-auto py-2' ><code className='rounded-md dark:bg-slate-900 bg-red-300 px-2 py-2'>
                {text}
            </code></pre>
        }
    }

    switch (type) {
        case "heading-three":
            return (
                <h3 key={index} className="text-xl font-semibold mb-4">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h3>
            );

        case "paragraph":
            return (
                <React.Fragment key={index}>
                    {modifiedText.map((item, i) => item.type === "pre" ?
                        <div className='mb-4' key={i}>{item}</div>
                        :
                        <p className='mb-4' key={i}>{item}</p>
                    )}
                </React.Fragment>
            );
        case "heading-four":
            return (
                <h4 key={index} className="text-md font-semibold mb-4">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h4>
            );
        case "image":
            return (
                <Image
                    key={index}
                    alt={obj.title}
                    height={obj.height}
                    width={obj.width}
                    src={obj.src}
                />
            );
        case "bulleted-list":
            return (
                <ul className='list-disc' key={index}>
                    {
                        obj?.children?.map(item => item.children?.map(item => item.children.map((item, index) => <li key={index}>{item.text}</li>)))
                    }
                </ul>
            )
        case "numbered-list":
            return (
                <ol className='list-decimal' key={index}>
                    {
                        obj?.children?.map(item => item.children?.map(item => item.children.map((item, index) => <li key={index}>{item.text}</li>)))
                    }
                </ol>
            )
        default:
            return modifiedText;
    }
};

export default BlogContent;
