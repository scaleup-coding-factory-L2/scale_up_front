
/*
model Subject {
  id Int @id @default(autoincrement())
  name String
  level String
  category String
  syllabus Syllabus[]
  needs Need[]
  hourlyRates HourlyRate[]
}*/ 
export default function FormCreateCategory() {

    return(
        <div className="flex inline-block border content-center flex-col justify-center border-8 pr-0">
            <span className="font-bold text-l mb-2 flex justify-center">Formulaire de création de category</span>
            <form className=" flex items-center flex-col ">
                <div className="flex content-center">
                    <label className="flex items-center justify-center">Inscrivez ci dessous le nom de votre nouvelle categorie pour vos cours:</label>
                    <br/>
                    <input placeholder="write here" className="flex content-center "/>
                </div>
                <div>
                    <button>Add category</button>
                </div>
            </form>
        </div>
      
    )
}

