const animals = [
    {
        name: 'Nesehorn'
    }, 
    {
        name: 'Flodhest'
    }, 
    {
        name: 'Giraff'
    }, 
    {
        name: 'Zebra'
    }
]

export default function handler(req, res) {
    
    if (req.method === 'POST') {
        const data = req.body
        if (!data?.name) {
            res.status(400).json({  success: false, error: 'Fyll ut navnet på dyret', data: data})
        } else {
            animals.push(data)
            res.status(201).json({ success: true, data: animals})
        }
    } else if (req.method === 'PUT') {
        res.status(405).end()
    } else {
        res.status(200).json({ success: true, data: animals })
    }
}