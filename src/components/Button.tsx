export interface ButtonProps {
    state: 'BUTTON_DEFAULT' | 'BUTTON_ADD' | 'BUTTON_SAVE' | 'BUTTON_CANCEL';
    type?: 'button' | 'submit';
    title: string;
    onBtnClick?: () => void;
}

function Button({
    state = 'BUTTON_DEFAULT',
    title,
    type = 'button',
    onBtnClick
}: ButtonProps) {
    let styles;

    switch (state) {
        case 'BUTTON_DEFAULT':
            styles = `px-2 py-1 ring-2 ring-inset ring-dark-gray`;
            break;
        case 'BUTTON_ADD':
            styles = `hover:bg-green
              bg-gradient-to-r from-blue-light to-green
              px-4 py-1`;
            break;
        case 'BUTTON_SAVE':
            styles = `w-20 hover:bg-green/75 hover:text-white px-2 py-1 
               ring-2 ring-inset ring-dark-gray`
            break;
        
        case 'BUTTON_CANCEL':
            styles = `w-20 hover:bg-orange hover:text-white px-2 py-1 
              ring-2 ring-inset ring-dark-gray`
            break;
    
        default:
            break;
    }
    const BASIC_STYLES = 'transition ease-in-out delay-150 rounded-md min-w-min text-dark-gray'
    
    return (
        <button
            type={type}
            className={`${BASIC_STYLES} ${styles}`}
            onClick={onBtnClick}
        >
            {title}
        </button>
    )
}

export default Button