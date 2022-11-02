# Bezos API [![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#concept) [![Continuous Integration](https://github.com/bezos-api/bezos-api/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bezos-api/bezos-api/actions/workflows/ci.yml) [![Deploy Lambda](https://github.com/bezos-api/bezos-api/actions/workflows/deploy-lambda.yml/badge.svg?branch=main)](https://github.com/bezos-api/bezos-api/actions/workflows/deploy-lambda.yml)

Random Jeff Bezos Quote API

---

> 🏗️ Work in progress

> View the status of the [GitHub Project](https://github.com/orgs/bezos-api/projects/1).

Contact: DM [@spencerlepine](https://twitter.com/spencerlepine) on Twitter

---

## 🔥 Usage

```sh
$ curl -L "${{ steps.aws-deploy.outputs.api_url }}"
```

### Example `JSON` response

```json
{
  "content": "Good intentions don't work, mechanisms do"
}
```

## ⚙️ Development Setup

> _Prerequisites:_ [npm](https://www.npmjs.com/), [Node v16](https://nodejs.org/en/download/), [AWS](aws.amazon.com) account

```
$ npm install -g aws-cdk
$ git clone https://github.com/bezos-api/bezos-api.git
$ cd bezos-api
$ npm install
$ cdk deploy
```

Then, to dispose of the stack/s afterwards
```
$ cdk destroy
```

## Contributing

Your contributions are always welcome! The [`quotes.json`](https://github.com/bezos-api/bezos-api/blob/main/lambda/quotes.json) file is what the API will serve. Please have a look at the [contribution guidelines](CONTRIBUTING.md) first.

## License

Distributed under the MIT License. See `LICENSE` for more information.


## Contact

Spencer Lepine - [@spencerlepine](https://twitter.com/spencerlepine)

Project Link: [https://github.com/bezos-api/bezos-api](https://github.com/bezos-api/bezos-api)