async function handleSubmit(e: { preventDefault: () => void; }, title: any, post: any) {
    e.preventDefault();

    const postData = async () => {
        const data = {
            title: title,
            post: post,
        };

        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    };

    postData().then((data) => {
        alert(data.message);
    }).catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while sending the email.');
    });
}
