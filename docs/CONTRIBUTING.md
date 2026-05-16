# Contributing to Munga & Brothers Operations System

Thank you for considering contributing to the **Munga & Brothers Supplies Digital Operations & Logistics Management System**.

## Code of Conduct

We expect all contributors to be respectful, professional, and collaborative. Harassment or offensive behavior will not be tolerated.

---

## Branching Strategy (Git Flow)

This project follows a **modified Git Flow** strategy suitable for production systems:

| Branch         | Purpose                                      | Protected | Deployment          |
|----------------|----------------------------------------------|---------|---------------------|
| `main`         | Production-ready code                        | Yes     | Production          |
| `dev`          | Integration branch for features & fixes      | Yes     | Staging / Preview   |
| `feature/*`    | New features and enhancements                | No      | -                   |
| `bugfix/*`     | Bug fixes                                    | No      | -                   |
| `hotfix/*`     | Critical production fixes                    | No      | Production          |
| `release/*`    | Release preparation (optional)               | No      | -                   |
| `docs/*`       | Documentation updates                        | No      | -                   |

### Branch Naming Convention

- `feature/order-management`
- `feature/sms-notification-enhancement`
- `bugfix/double-truck-assignment`
- `hotfix/login-crash`
- `docs/api-reference-update`

---

## How to Contribute

### 1. Reporting Bugs
- Use the **Bug Report** issue template
- Provide clear reproduction steps, expected vs actual behavior
- Include screenshots, browser/version, and environment details

### 2. Suggesting Features
- Use the **Feature Request** issue template
- Explain the business value for Munga & Brothers
- Include proposed solution if possible

### 3. Submitting Code Changes (Pull Requests)

1. **Pull latest code**
   ```bash
   git checkout dev
   git pull origin dev
    ```
# Contributing to Munga & Brothers Operations System

Thank you for considering contributing to the **Munga & Brothers Supplies Digital Operations & Logistics Management System**.

## Code of Conduct

We expect all contributors to be respectful, professional, and collaborative. Harassment or offensive behavior will not be tolerated.

## Ways to Contribute

### 1. Reporting Bugs
- Use the Bug Report issue template
- Include clear steps to reproduce the issue
- Mention your environment (Node.js version, browser, OS)
- Provide screenshots if applicable

### 2. Suggesting Features or Improvements
- Use the Feature Request issue template
- Clearly explain the problem and proposed solution
- Describe the business value for Munga & Brothers

### 3. Submitting Code Changes (Pull Requests)

1. Fork the repository
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test your changes thoroughly
5. Commit using Conventional Commit format
6. Push your branch and open a Pull Request

## Development Setup

```bash
# Clone the repo
git clone https://github.com/CGAJAY/munga-brothers-operations-system.git

# Backend setup
cd server
npm install

# Frontend setup
cd ../client
npm install
```

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` → New feature
- `fix:` → Bug fix
- `docs:` → Documentation changes
- `refactor:` → Code refactoring
- `test:` → Adding or updating tests
- `chore:` → Maintenance tasks
- `style:` → Code style changes

**Example:**
```
feat(delivery): implement proof of delivery photo upload
docs: update system design with new SMS flow
fix(order): prevent double assignment of same truck
```

## Coding Standards

- Use meaningful names for variables and functions
- Keep functions small and focused
- Add comments for complex business logic
- Follow existing code style
- Update documentation when adding or changing features

## Documentation

All significant changes should include:

- Updates to relevant files in the `/docs` folder
- Clear description in the Pull Request

## Questions or Need Help?

- Open a Discussion in the GitHub repository
- Contact John Mugendi

---

Thank you for helping improve the Munga & Brothers Operations System! 🙏