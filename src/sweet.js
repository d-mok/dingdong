
globalThis.sweet = {
    async warn(title, text) {
        // show a warning dialog, will throw error if dismissed by user
        const res = await Swal.fire({
            title: title,
            text: text,
            icon: "warning",
        });
        if (!res.isConfirmed) throw 'Sweet Confirm Dismissed! Stop Execution';
        return res.isConfirmed;
    },
    async ask(title, text, preset = "", inputType = "text") {
        // show a dialog asking the user a input
        const res = await Swal.fire({
            title: title,
            text: text,
            input: inputType,
            icon: "question",
            inputValue: preset,
            inputValidator: (x) => (!!x ? null : "Enter Something!")
        });
        if (!('value' in res)) throw 'Sweet Input Dismissed! Stop Execution';
        return res.value;
    },
    error(title, text) {
        // show a dialog with error info
        Swal.fire({
            title: title,
            text: text,
            icon: "error"
        });
    },
    cheer(title, text) {
        // show a dialog with success info
        Swal.fire({
            title: title,
            text: text,
            icon: "success"
        });
    },
    toast(title, text, icon = "success") {
        // show a toast notification
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            toast: true,
            position: 'bottom',
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
    },
    show(title, text, show) {
        // show a dialog with a textarea, allow user to copy the content
        Swal.fire({
            title: title,
            text: text,
            html: '<textarea id="swal-input2" style="height:auto!important" class="swal2-input" rows="15">' + show + '</textarea>',
            width: "60%",
            icon: "info",
        });
    }
};


