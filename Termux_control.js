const { exec } = require('child_process');

// Function to execute a shell command
const executeCommand = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
};

// Example: Running the 'pkg update' command in Termux
const termuxCommand = 'pwd';

executeCommand(termuxCommand);
