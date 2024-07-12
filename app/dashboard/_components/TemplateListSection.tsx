
import Templates from '@/app/(data)/Templates';
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard';

export interface Form {
    label:string;
    field:string;
    name: string;
    required?:boolean
}

export interface Template {
    name: string;
    desc: string;
    icon: string;
    category: string;
    slug: string;
    aiPrompt: string;
    form?: Form[]
}


function TemplateListSection({userSearchInput}:any) {
    const [templateList, setTemplateList] = useState(Templates);
    useEffect(()=>{
        if(userSearchInput){
            const filteredList = Templates.filter(item=>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTemplateList(filteredList)
        }else{
            setTemplateList(Templates)
        }
    },[userSearchInput])
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
        {templateList.map((item: Template,index: number) => (
            <TemplateCard {...item} />
        ))}
    </div>
  )
}

export default TemplateListSection