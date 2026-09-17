# Function to handle a single expense
def add_expense():

    description = input("Enter expense description: ")

    while True:
        try:
            amount = float(input("Enter expense amount: "))

            if amount >= 0:
                return description, amount
            else:
                print("Amount cannot be negative.")

        except ValueError:
            print("Please enter a valid number.")


# Budget input
while True:
    try:
        budget = float(input("Enter your budget (UGX): "))

        if budget >= 0:
            break
        else:
            print("Budget cannot be negative.")

    except ValueError:
        print("Please enter a valid number.")


transactions = []
total_expenses = 0


# Record 5 transactions
for i in range(5):

    print(f"\nTransaction {i+1}")

    description, amount = add_expense()

    transactions.append((description, amount))

    total_expenses += amount

    if total_expenses > budget:
        print("⚠️: Budget exceeded!")


# Final report
print("\n==========================")
print("FINAL FINANCIAL REPORT")
print("==========================")

print(f"Initial Budget: {budget}")
print(f"Total Expenses: {total_expenses}")

if total_expenses <= budget:
    balance = budget - total_expenses
    print(f"Remaining Balance: {balance}")
else:
    deficit = total_expenses - budget
    print(f"Overspent By: {deficit}")

print("\nTransaction List:")

for description, amount in transactions:
    print(f"{description} - {amount}")