import React from 'react';
import s from './BooksMark.module.scss'

interface BooksMarkProps {
    text: string
    isBlackTextColor?: boolean
}


const BooksMark:React.FC<BooksMarkProps> = ({text, isBlackTextColor = false}) => {

    const systemDarkBlueMarks = ['ектоморф', 'набір маси', 'витривалість', 'WeightGain', 'Endurance', 'WeightLoss']
    const systemYellowMarks = ['середній', 'Intermediate']
    const systemRedMarks = ['просунутий', 'Advanced']
    const systemGreenMarks = ['початковий', 'Beginner']

    const isDarkBlueStyles = systemDarkBlueMarks.includes(text)
    const isYellowStyles = systemYellowMarks.includes(text)
    const isRedStyles =  systemRedMarks.includes(text)
    const isGreenStyles = systemGreenMarks.includes(text)


    return (
        <div className={isDarkBlueStyles && s.darkBlue
            || isYellowStyles && s.yellow
            || isRedStyles && s.red
            || isGreenStyles && s.green
            || s.defaultStyles
        }
             style={isBlackTextColor ? {color: '#000000'} : {color: '#FFFFFF'}}>
            {text}
        </div>
    );
};

export default BooksMark;