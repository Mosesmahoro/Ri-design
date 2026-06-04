import { Phone, DollarSign, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface PaymentMethod {
  id: "airtel" | "tnm";
  name: string;
  icon: React.ReactNode;
  description: string;
  steps: string[];
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "airtel",
    name: "Airtel Money",
    icon: <Phone className="w-6 h-6" />,
    description: "Pay directly using your Airtel Money account",
    steps: [
      "Dial *211# on your Airtel line",
      "Choose 'Send money' / 'Send'",
      "Select 'Airtel number' or 'To Airtel' (enter phone)",
      "Choose 'Enter phone number' if prompted",
      "Enter: 0993443277",
      "Enter the amount to pay",
      "Enter your Airtel Money PIN and confirm the transaction",
    ],
  },
  {
    id: "tnm",
    name: "TNM Mpamba",
    icon: <Phone className="w-6 h-6" />,
    description: "Pay securely with TNM Mpamba mobile money",
    steps: [
      "Dial *444# on your TNM line",
      "Choose 'Send money'",
      "Select 'Pamba'",
      "Choose 'Wallet'",
      "Select 'With cashout fee' (if prompted)",
      "Enter: 0882068557",
      "Enter the amount to pay",
      "Enter your TNM Mpamba PIN and confirm the transaction",
    ],
  },
];

interface PaymentFormProps {
  onSubmit?: (data: { method: string; amount: number; phone: string; transactionMessage?: string }) => void;
}

export function PaymentMethods({ onSubmit }: PaymentFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<"airtel" | "tnm">("airtel");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [transactionMessage, setTransactionMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && phone) {
      onSubmit?.({ method: selectedMethod, amount: parseFloat(amount), phone, transactionMessage });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const currentMethod = paymentMethods.find((m) => m.id === selectedMethod);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Payment Methods */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Methods</h3>
        <div className="space-y-2">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                selectedMethod === method.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-1 ${
                    selectedMethod === method.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {method.icon}
                </div>
                <div>
                  <div className="font-semibold">{method.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {method.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Steps */}
        {currentMethod && (
          <div className="rounded-lg border border-border bg-card/50 p-4 space-y-3">
            <h4 className="font-semibold text-sm">How to pay with {currentMethod.name}:</h4>
            <ol className="space-y-2">
              {currentMethod.steps.map((step, idx) => (
                <li key={idx} className="flex gap-2 text-sm">
                  <span className="font-semibold text-primary min-w-6">{idx + 1}.</span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* Payment Form */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Enter Payment Details</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., 0987654321"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Your {selectedMethod === "airtel" ? "Airtel" : "TNM"} registered mobile number
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Amount (MWK)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                MWK
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-12 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
                min="1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Paste transaction message (optional)</label>
            <textarea
              value={transactionMessage}
              onChange={(e) => setTransactionMessage(e.target.value)}
              placeholder="Paste the transaction message/receipt text you received after payment"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            />
            <p className="text-xs text-muted-foreground mt-1">Optional — paste the mobile money confirmation text to help us match your payment.</p>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-6 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            <DollarSign size={16} />
            Initiate Payment
          </button>

          {submitted && (
            <div className="flex gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-sm">
              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold">Ready to pay!</div>
                <div className="text-xs opacity-90">
                  Follow the instructions above to complete your payment on your phone.
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
