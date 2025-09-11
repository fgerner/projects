import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'React-dom'
import Button from './Button.jsx'

const Modal = forwardRef(function Modal({children}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                // document.querySelector('dialog').showModal()
                dialog.current.showModal()
            },
            close() {
                document.querySelector('dialog').close()
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shamdow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>close</Button>
            </form>
        </dialog>
        , document.getElementById('modal-root'))
})

export default Modal