from together import Together
import os

# Load API key from environment variable (more secure)
TOGETHER_API_KEY = ""

def analyze_with_together(user_input):
    """Send code to Together AI for analysis and suggestions."""
    client = Together(api_key=TOGETHER_API_KEY)

    prompt = f"""
You are an AI assistant for debugging and optimizing code.
Your tasks:
- Check for correctness
- Suggest actionable improvements
- Provide an optimized version if possible

Here is the code to analyze:
{user_input}
    """

    try:
        response = client.chat.completions.create(
            model="meta-llama/Llama-3.3-70B-Instruct-Turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1000,
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"An error occurred: {e}"

# Get input and analyze
if __name__ == "__main__":
    user_input = input("Paste your code: ")
    result = analyze_with_together(user_input)
    print("\n=== Analysis Result ===\n")
    print(result)
