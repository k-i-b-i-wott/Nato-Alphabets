import React, { use } from 'react'
 import './App.css'

import { useState } from 'react'
const App = () => {

  const [text, setText] = useState('')
  const [result, setResult] = useState('')
   const aphabets={
    'A':'Alfa',
    'B':'Bravo',
    'C':'Charlie',
    'D':'Delta',
    'E':'Echo',
    'F':'Foxtrot',
    'G':'Golf',
    'H':'Hotel',
    'I':'India',
    'J':'Juliet',
    'K':'Kilo',
    'L':'Lima',
    'M':'Mike',
    'N':'November',  
    'O':'Oscar',
    'P':'Papa',

    'Q':'Quebec',
    'R':'Romeo',
    'S':'Sierra',
    'T':'Tango',
    'U':'Uniform',
    'V':'Victor',
    'W':'Whiskey',
    'X':'X-ray',
    'Y':'Yankee',
    'Z':'Zulu',
    '0':'Zero',
    '1':'One',
    '2':'Two',
    '3':'Three',
    '4':'Four',
    '5':'Five',
    '6':'Six',
    '7':'Seven',
    '8':'Eight',
    '9':'Nine',
    '!':'Exclamation Mark',
    '"':'Double Quote',
    '#':'Hash',
    '$':'Dollar Sign',
    '%':'Percent Sign',
    '&':'Ampersand',
    "'":"Apostrophe",
    '(':'Left Parenthesis',
    ')':'Right Parenthesis',
    '*':'Asterisk',
    '+':'Plus Sign',
    ',':'Comma',
    '-':'Hyphen',
    '.':'Period',
    '/':'Slash',
    ':':'Colon',
    ';':'Semicolon',
    '<':'Less Than',
    '=':'Equals Sign',
    '>':'Greater Than',
    '?':'Question Mark',
    '@':'At Symbol',
    '[':'Left Square Bracket',
    '\\':'Backslash',
    ']':'Right Square Bracket',
    '^':'Caret',
    '_':'Underscore',
    '`':'Grave Accent',
    '{':'Left Curly Brace',
    '|':'Vertical Bar',
    '}':'Right Curly Brace',
    '~':'Tilde',
   };

   
   const convertToNato = (text) => {

    const words = text.split(' ')
    const natoWords = words.map(word => {
      const letters = word.split('')
      const natoLetters = letters.map(letter => {
        const nato = aphabets[letter.toUpperCase()]
        return nato
      })
      return natoLetters.join(' ')
    })
    setResult(natoWords.join(' '))

     
   }

   const handleTextChange = (e) => {
    setText(e.target.value)
    convertToNato(e.target.value)
   }


  
   


  return (
    <div className='app-details'>
        <h1>NATO PHONETIC ALPHABET</h1>
       <h4>Convert text to nato phonetic alphabets</h4>
       <textarea name="" id="" value={text} onChange={handleTextChange} >

       </textarea>
       <div  className='output'>
       <h3>{result}</h3>
       
      
       </div>
    </div>
  )
}
export  default App
