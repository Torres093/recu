import mecanicosModels from "../models/mecanicosModels.js"

const mecanicosController = {}; 

mecanicosController.getMecanicos = async (req, res) =>{
    const mecanico = await mecanicosModels.find(); 
    res.json(mecanico); 
}; 

mecanicosController.insertMecanicos = async (req, res) => {
    const{nombre, apellido, especialidad, telefono, añosExperiencia} = req.body; 
    const newMecanicos = new carrosModels({
        nombre,
        apellido,
        especialidad,
        telefono,
        añosExperiencia,
    }); 

    await newMecanicos.save(); 

    res.json({
        message: "mecanico guardado correctamente"
    })

}

mecanicosController.deleteMecanicos= async (req, res) =>{
    await  mecanicosModels.findById(req.params.id); 
    res.json({message: "mecanico eliminado"})

}

mecanicosController.updateMecanicos = async (req, res) => {
    const {nombre, apellido, especialidad, telefono, añosExperiencia} = req.body; 
    await carrosModels.findByIdAndUpdate(
        req.params.id,
        {nombre, apellido, especialidad, telefono, añosExperiencia},
        {new: true}

    ); 
    res.json({message: "Mecanico actualizado"})

}

export default mecanicosController; 