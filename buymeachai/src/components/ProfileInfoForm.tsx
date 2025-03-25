"use client";

import { saveProfile } from "@/actions/profileInfoActions";

export default function ProfileInfoForm() {
   async function handleFormAction(formData: FormData){
          const result = await saveProfile(formData);
          console.log(result);
    }
    
    return(
        <>
        <form action={handleFormAction}>
        <div className="bg-gray-200 p-4 rounded-lg">
                <div className="bg-gray-300 size-24 rounded-full p-4">avatar</div>
                <div>cover image</div>
            </div>
            <div>
                <label className="block mt-4" htmlFor="usernameIn">Username</label>
                <input name="username"id="usernameIn" type="text" placeholder="username" />
            </div>
            <div>
                <label className="block mt-4" htmlFor="displayNameIn">Display name</label>
                <input  name="displayName" id="displayNameIn" type="text" placeholder="display name" />
            </div>
            <div>
                <label className="block mt-4" htmlFor="bioIn">Bio</label>
                <textarea name="Bio" id="bioIn" placeholder="bio"></textarea>
            </div>
            <div>
                <button className="mt-4 bg-yellow-300 px-4 py-2 rounded-lg">
                    Save Profile
                </button>
            </div>
        </form>
        </>
    )
}