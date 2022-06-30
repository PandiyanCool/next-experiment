import { articles } from '../../../data'

export default function handler(req, res) {
    console.log(articles)
    res.status(200).json(articles)
}

