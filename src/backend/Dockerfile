FROM python:3.6.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app
RUN pip install -r requirements.txt

ENTRYPOINT [ "flask" ]
CMD ["run", "--host=0.0.0.0", "--port=5050"]
# CMD ["gunicorn", "--workers=2", "--bind=0.0.0.0:5050", "app:app", "--capture-output", "--log-level=debug"]