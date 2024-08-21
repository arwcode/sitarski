# Pracownia Bartłomiej K. Sitarski



This project is a full-stack Next.js application.

You can try it out here: **[https://sitarski.vercel.app](https://sitarski.vercel.app)**


## Setup

Follow these steps to set up the project locally.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the repository**

```bash
git clone https://github.com/arwcode/sitarski.git
cd sitarski
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Setup Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#MONGODB
MONGODB_DB=
MONGODB_URI=

#CLOUDINARY
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_FOLDER_NAME=
CLOUDINARY_API_SECRET=
CLOUDINARY_API_KEY=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Fill in the environmental variable values with your actual credentials.
You can obtain these credentials by signing up on the [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com) and [Clerk](https://clerk.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## More

For more information please contact [arwcode@gmail.com](mailto:arwcode@gmail.com).
