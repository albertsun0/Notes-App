const asyncWrapper = (fn) =>{
    return async(req, res, next) =>{
        try{
            await fn(req, res, next)
        }
        catch{
            return res.status(500).json("error")
        }
    }

}

module.exports = asyncWrapper