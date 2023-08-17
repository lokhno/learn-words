"use client"

import { useState } from 'react';
import WordsList from './components/WordsList';

import wordsData from '@/data/wordsData';
import categoriesData from '@/data/categoriesData';

export default function Words() {
    const [selectedCategory, setselectedCategory] = useState(0)
    return (
        <div>
            <select
                onChange={(e) => {
                    setselectedCategory(+e.target.value)
                }}
            >
                <option value="0">Все слова</option>
                {
                    categoriesData.map((item) =>
                        (<option value={item.id} key={item.id}>{item.title}</option>))

                }
            </select>
            <WordsList
                words={wordsData}
                categories={categoriesData}
                selectedCategory={selectedCategory}
            />
        </div>
    )
}
