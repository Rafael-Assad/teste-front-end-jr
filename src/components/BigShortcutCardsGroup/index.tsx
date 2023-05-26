import BigShortcutCards from '../BigShortcutCards'

import "./style.scss"

interface BigShortcutCarsGroupProps {
    headline: string;
}

const BigShortcutCarsGroup = ({headline}:BigShortcutCarsGroupProps) => {
  return (
    <div className='big-cards-group'>
        <BigShortcutCards title={headline}/>

        <BigShortcutCards title={headline}/>
    </div>
  )
}

export default BigShortcutCarsGroup