const {z} = require("zod");

const jobApplicationSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    phone: z.string().regex(/^[0-9]{10}$/),
    experience: z.number().min(0).max(20),
    skills: z.array(z.string()).min(1),

    education: z.object({
        degree: z.string(),
        college: z.string(),
        graduationYear: z.number(),
    }),

    expectedSalary: z.number().positive(),
    resumeUrl : z.string().url(),

    status: z.enum([
        "pending", 
        "reviewing",
        "accepted",
        "rejected"
    ])
})

module.exports = {jobApplicationSchema}

