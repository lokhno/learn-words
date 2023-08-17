"use client"

import React, { useState } from 'react'
import {
    FaEyeSlash,
    FaEye,
    FaSpellCheck,
    FaRandom,
    FaArrowDown
} from 'react-icons/fa';

import style from './word-list.module.scss';

type Props = {
    words: Word[],
    categories: Category[],
    selectedCategory: number,
}

type Learn = "" | "en" | "ru";

const shuffle = (array: Word[]) => {
    const tmpArray = [...array]
    let m = tmpArray.length, t, i;

    // Пока есть элементы для перемешивания
    while (m) {

        // Взять оставшийся элемент
        i = Math.floor(Math.random() * m--);

        // И поменять его местами с текущим элементом
        t = tmpArray[m];
        tmpArray[m] = tmpArray[i];
        tmpArray[i] = t;
    }

    return tmpArray;
}


const WordsList = (props: Props) => {
    const {
        words,
        categories,
        selectedCategory
    } = props;

    const [learn, setLearn] = useState<Learn>("");
    const [openWords, setOpenWords] = useState<any>({});
    const [check, setCheck] = useState<boolean>(false);
    const [tmpWords, setTmpWords] = useState(words);
    const [shuffled, setShuffled] = useState(false);


    const getIcon = (value: Learn) => {
        const handleShuffle = () => {
            if (!shuffled) {
                setTmpWords(shuffle(words));
                setShuffled(true);
            } else {
                setTmpWords(words);
                setShuffled(false);
            }
        }
        if (learn == "") {
            return (
                <>
                    <FaEyeSlash
                        className={style.icon}
                        onClick={() => {
                            setLearn(value)
                        }}
                    />
                    {
                        !shuffled ?
                            (
                                <FaRandom
                                    className={style.icon}
                                    onClick={handleShuffle}
                                />
                            ) :
                            (
                                <FaArrowDown
                                    className={style.icon}
                                    onClick={handleShuffle}
                                />
                            )
                    }

                </>
            )
        }
        if (learn === value) {
            return (
                <>
                    <FaEye
                        className={style.icon}
                        onClick={() => {
                            setLearn("")
                            setOpenWords({})
                            setCheck(false);
                        }}
                    />
                    {!check && <FaSpellCheck
                        className={style.icon}
                        onClick={() => {
                            setCheck(true);
                        }}
                    />}
                </>
            )
        }
        if (learn !== value) {
            return (
                <></>
            )
        }
    }

    const handleOpenWords = (id: number) => {
        setOpenWords({
            ...openWords,
            [id]: !openWords[id]
        })
    }


    return (
        <div className={style.wordList}>


            <div className={style.headerWrapper}>
                <div className={style.header}>
                    <div className={style.header__item}>
                        in english
                        {getIcon("en")}
                    </div>
                    <div className={style.header__item}>
                        на русском
                        {/* {getIcon("ru")} */}
                    </div>
                    {/* <div className={style.header__item}>
                        категория
                    </div> */}

                </div>
            </div>
            {
                tmpWords.map((word) => {
                    // const category = categories.find(item => item.id === word.categoryId);
                    if (selectedCategory === 0 || word.categoryId === selectedCategory) {


                        return (
                            <div key={word.id} className={style.line}>
                                <div className={style.line__item}>
                                    {learn === "en" ? (
                                        <div className={style.item__learn}>
                                            {
                                                openWords[word.id] || check ?
                                                    (
                                                        <div className={`${style.lineItemHint} ${style.item__learnItem}`}>
                                                            {
                                                                !check && <FaEyeSlash
                                                                    className={style.icon}
                                                                    onClick={() => {
                                                                        handleOpenWords(word.id);
                                                                    }}
                                                                />
                                                            }
                                                            {
                                                                <div className={style.item__learnItem}>{word.en}</div>
                                                            }
                                                        </div>
                                                    ) :
                                                    (
                                                        <FaEye
                                                            className={`${style.icon}`}
                                                            onClick={() => {
                                                                handleOpenWords(word.id);
                                                            }}
                                                        />
                                                    )

                                            }

                                            < input className={style.item__learnItem} />
                                        </div>)
                                        : word.en}
                                </div>
                                <div className={style.line__item}>
                                    {word.ru}
                                </div>
                                {/* <div className={style.line__item}>
                                {category ? category.title : "Нет категории"}
                            </div> */}

                            </div>
                        )
                    }
                })

            }
        </div>
    )
}

export default WordsList