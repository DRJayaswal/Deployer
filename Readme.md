# Deployer

## Project Description
Deployer is a tool designed to automate the deployment process of your applications. It simplifies the deployment workflow, ensuring that your applications are deployed efficiently and consistently.

## Installation
To install Deployer, follow these steps:
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Deployer.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Deployer
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Environment Setup
Create a [.env](https://en.wikipedia.org/wiki/Environment_variable) file in the root directory and add your AWS and server configuration:

```env
    PORT=3000
    AWS_ACCESS_KEY_ID=your_aws_access_key_id
    AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
    AWS_ENDPOINT=your_aws_endpoint
    AWS_REGION=your_aws_region
    SQS_QUEUE_URL=your_sqs_queue_url
    AWS_BUCKET_NAME=your_s3_bucket_name
    GITHUB_TOKEN=your_github_token
```
## Usage
To use Deployer, follow these steps:
1. Configure your deployment settings in the `config.json` file.
2. Run the deployment script:
    ```sh
    npm run deploy
    ```

## Contributing
We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
