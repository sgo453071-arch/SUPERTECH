export const submitForm = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.send(`
        <h1>Data Submitted</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `);
}