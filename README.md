# Grafana k6

Grafana k6 (previously known as Load Impact) is a modern open-source load testing tool written in GO, using which you can easily assess the performance and scalability of the applications by simulating real-life user traffic.
k6 uses JavaScript as its scripting language, which makes it highly accessible to developers and testers familiar with JavaScript. It provides a straightforward and flexible scripting interface for defining test scenarios and simulating user behavior.


# Clone & Install - K6

Clone the repo https://github.com/Anshita-Bhasin/PerformanceTesting-K6.git

**1) Install K6**

MAC OS => brew install k6

Windows => winget install k6

# Run test scripts using - K6

 Run the test case using the below command**

1. API => k6 run <test_script.js>
2. Browser Headless Mode => k6 run <test_script.js>
3. Browser UI Mode => K6_BROWSER_HEADLESS=false k6 run <test_script.js>

<img width="877" alt="image" src="https://github.com/Anshita-Bhasin/k6_examples/assets/10338077/1244a47d-0741-435a-a2f8-6758b3bcfdea">

