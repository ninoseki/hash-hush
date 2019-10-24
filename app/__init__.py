from urllib.parse import urlparse
from flask import Flask, request, render_template
import requests


VALID_HOSTNAMES = [
    "www.virustotal.com",
    "www.hybrid-analysis.com"
]


def validate_link(link):
    url = urlparse(link)
    hostname = url.hostname
    return hostname in VALID_HOSTNAMES


def link_check(url):
    response = requests.get(url)
    print(response.status_code)
    return response.status_code == 200


app = Flask(__name__,
            static_folder="../dist/static",
            template_folder="../dist")


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/check')
def check():
    link = request.args.get("link")
    if link is None:
        return {"link": link, "error": "Link is not given"}, 400

    if not validate_link(link):
        return {"link": link, "error": "Invalid link is given"}, 400

    result = link_check(link)
    return {"link": link, "valid": result}
