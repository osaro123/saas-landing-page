"use client"
import React, { useState } from 'react'
import PlusIcon from "../assets/icons/plus.svg"
import MinusIcon from "../assets/icons/minus.svg"
import clsx from 'clsx';

const items = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including credit cards, debit cards, and PayPal. For corporate clients, we also offer invoicing options."
    },
    {
        question: "How does the pricing work for teams?",
        answer: "Pricing for teams is based on the number of users. We offer tiered pricing plans that provide discounts as the team size increases. Custom enterprise plans are also available for larger teams."
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will take effect immediately, and any adjustments to your billing will be prorated."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we take data security very seriously. We use industry-standard encryption protocols and have robust security measures in place to protect your data. Regular security audits are conducted to ensure the highest level of protection."
    },
];


type AccordionPropType = {
    question: string,
    answer: string
}

const AccordionItem = ({question,answer}:AccordionPropType) => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div className='py-7 border-b border-white/30'>
            <div className='flex items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <span className='flex-1 text-lg font-bold'>{question}</span>
                {isOpen ? <MinusIcon/> : <PlusIcon/>}
            </div>
            <div className={clsx("mt-4",{
                hidden: !isOpen,
                "": isOpen === true
            })}>{answer}</div>
        </div>
    )
}

const Faq = () => {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24'>
        <div className='container'>
            <h2 className='text-5xl sm:text-6xl max-w-[648px] mx-auto font-bold tracking-tighter text-center'>Frequently asked questions</h2>
            <div className='mt-12 max-w-[648px] mx-auto'>
                {items.map(({question,answer}) => (
                    <AccordionItem question={question} answer={answer}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq