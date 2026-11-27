

const ResetPassword = () => {
  return (
    <form className="flex flex-col justify-center gap-5 px-3 py-5 rounded-2xl shadow-sm/40 md:w-1/2 md:mx-auto">
        <input type="password" placeholder="Entrez le nouveau mot de passe"  className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"/>
        <input type="password" placeholder="Confirmer le mot de passe"  className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"/>
        <button className="bg-[#0B6B78] text-white rounded-lg p-2">Changer de mot de passe</button>
        
    </form>
  )
}

export default ResetPassword