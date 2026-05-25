# Git Commands Guide

Basic Git commands commonly used in projects.

---

# Initialize Git Repository

```bash
git init
```

Initialize a new Git repository in the current project folder.

---

# Add Files to Staging

```bash
git add .
```

Add all project files to the staging area.

---

# Create Commit

```bash
git commit -m "Initial commit"
```

Create a new commit with a message.

---

# Connect Remote Repository

```bash
git remote add origin https://github.com/aditya/project.git
```

Connect your local project to a remote GitHub repository.

---

# Rename Branch to Main

```bash
git branch -M main
```

Rename the current branch to `main`.

---

# Push Code to GitHub

```bash
git push -u origin main
```

Push project code to the remote repository.

---

# Check Connected Remote Repository

```bash
git remote -v
```

Display all connected remote repositories.

---

# Remove Remote Repository

```bash
git remote remove origin
```

Remove the connected remote repository from the project.

---

# Clone Existing Repository

```bash
git clone https://github.com/aditya/project.git
```

Download an existing GitHub repository to your local machine.

---

# Check Git Status

```bash
git status
```

Show changed, staged, and untracked files.

---

# Pull Latest Changes

```bash
git pull origin main
```

Fetch and merge the latest changes from GitHub.

---

# Push New Changes

```bash
git push origin main
```

Push committed changes to GitHub.

---

# Remove Git Repository Completely

## Mac / Linux

```bash
rm -rf .git
```

## Windows CMD

```bash
rmdir /s /q .git
```

## Windows PowerShell

```powershell
Remove-Item -Recurse -Force .git
```

Delete the Git repository from the current project.
