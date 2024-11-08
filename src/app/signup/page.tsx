'use client';
import React, { useRef } from "react";

interface SignUpFormData {
  name?: string;
  role: 'ADMIN' | 'USER';
  email: string;
  city?: string;
}

function SignUp() {
  const formRef: React.RefObject<HTMLFormElement> = useRef(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Récupération des données du formulaire via FormData
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as SignUpFormData;

    if (!data.email) {
      console.error("handleSubmit: email is empty");
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("handleSubmit: Error in server response", response.statusText);
        return;
      }

      formRef.current?.reset();

      // Affiche les données dans la console (à remplacer par votre logique)
      console.log("Données du formulaire:", data);
    } catch (error) {
      console.error("handleSubmit: error while sending data to the server", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Inscription</h2>

        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-gray-600">Nom et prénom :</label>
          <input type="text" id="name" name="name" 
                 className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-gray-600">
            Email <span className="text-red-500">*</span> :
          </label>
          <input type="email" id="email" name="email" required 
                 className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="city" className="text-gray-600">City :</label>
          <input type="text" id="city" name="city" 
                 className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="role" className="text-gray-600">Rôle :</label>
          <select id="role" name="role" defaultValue="USER" required 
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="USER">Utilisateur</option>
            <option value="ADMIN">Administrateur</option>
          </select>
        </div>

        <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default SignUp;
