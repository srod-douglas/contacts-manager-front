import './styles.css'

export const DeleteProfile = ({ handleDeleteMenu }) => {
    return(
        <div className='container-delete'>
            <div className='div-infos'>
                <h2 className='title-delete'>Are you sure?</h2>
                <p className='sub-title-delete relative'>
                    <span className='animate-ping absolute top-8 left-1/4 inline-flex w-1/2 h-2 rounded-full bg-red-600 opacity-75'></span>
                    if you delete your account, all your contacts will be lost.
                </p>
            </div>
            <div className='div-bts-client'>
                <div>
                    <p className='text-white underline decoration-solid'>Yes, I understand and I want to delete my account.</p>
                    <button className='btn-confirm'>
                        Delete my account
                    </button>
                </div>
                <button className='btn-cancel-close' onClick={() => handleDeleteMenu()}>Cancel</button>
            </div>
        </div>
    )
}