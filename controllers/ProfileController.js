exports.profile = (req, res, send) => {
    if (!req.query) { res.status(400).send({ 'error': 'Informações Incompletas!', success: false }) }

    const parameters = req.query
    console.log(parameters)
}