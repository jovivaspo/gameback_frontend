import { useContext, useState } from 'react'
import alertContext from '../contexts/alertContext'
import { helpHttp } from '../services/helpHttp'
import { useListGames } from './useListGames'


const useFormGame = (category) => {


    const initialForm = () => {
        return {
            name: '',
            image: '',
            rating: '',
            status: category,
            position: '',
            comment: '',
        }
    }
    const [form, setForm] = useState(initialForm)
    const [game, setGame] = useState()
    const { setAlert } = useContext(alertContext)
    const {addGame} = useListGames()



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSelectGame = (e) => {

        setForm({ ...form, ['name']: e.target.dataset.name, ['image']: e.target.dataset.img })
        setGame(e.target.dataset.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.name) {
            setAlert({ error: true, message: 'You Must Select A Game' })
            return false
        } else {
            addGame(form)
            setForm(initialForm)
            setGame(null)
        }


    }


    return { form, game, handleChange, handleSubmit, handleSelectGame }
}

export { useFormGame }