x = 20

if x > 15:
    print("Hello Gaes ini 15 lebih dari 20")
else:
    print("Ini salah woy")

# Logic Interview Coding Example:
# Diberikan sebuah list angka, hitung jumlah angka genap di dalamnya.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_count = 0
for num in numbers:
    if num % 2 == 0:
        even_count += 1
print(f"Jumlah angka genap: {even_count}")

