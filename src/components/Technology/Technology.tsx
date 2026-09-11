import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const Technology = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    const remaining = stack.filter(
      (item) => item.id !== id
    );

    setStack(remaining);
    toast.info("Technology removed from your stack!");
  };

  const removeAll = () => {
    setStack([]);
    toast.info("All technologies removed!");
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading technologies...
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" />

      <section className="max-w-6xl mx-auto px-5 py-10">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Explore the{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {technologies.map((technology) => {

              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className={`border rounded-xl p-5 bg-white shadow-sm ${
                    isAdded
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                >

                  <div className="flex items-start justify-between gap-3">

                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-10 h-10 shrink-0"
                    />

                    <span className="text-xs bg-sky-50 text-sky-500 border border-sky-100 px-2 py-1 rounded-full whitespace-nowrap">
                      {technology.badge}
                    </span>

                  </div>

                  <h3 className="text-lg font-semibold mt-4">
                    {technology.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 min-h-16">
                    {technology.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-xs min-w-0">

                    <span className="bg-gray-100 px-2 py-1 rounded truncate min-w-0">
                      {technology.category}
                    </span>

                    <span className="whitespace-nowrap shrink-0">
                      {technology.difficulty}
                    </span>

                    <span className="flex items-center gap-1 whitespace-nowrap shrink-0 ml-auto">
                      ⭐ {technology.rating}
                    </span>

                  </div>

                  <button
                    onClick={() => addToStack(technology)}
                    disabled={isAdded}
                    className={`w-full mt-4 py-2 rounded-md text-sm ${
                      isAdded
                        ? "bg-pink-100 text-pink-500 border border-pink-200"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    {isAdded
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm h-fit">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                Your Stack
              </h3>

              <span className="text-sm text-gray-500">
                {stack.length} Selected
              </span>

            </div>

            {stack.length === 0 ? (

              <div className="text-center py-10">

                <p className="text-sm text-gray-500">
                  No technologies selected yet.
                </p>

                <div className="mt-4 bg-gray-50 border border-gray-100 rounded-lg p-5">
                  <p className="text-sm text-gray-400">
                    Your stack is empty.
                  </p>
                </div>

              </div>

            ) : (

              <div className="mt-5 space-y-3">

                {stack.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                  >

                    <div className="flex items-center gap-3">

                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8"
                      />

                      <div>

                        <p className="text-sm font-medium">
                          {item.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {item.category}
                        </p>

                      </div>

                    </div>

                    <button
                      onClick={() => removeFromStack(item.id)}
                      className="text-red-500 text-sm"
                    >
                      ✕
                    </button>

                  </div>

                ))}

                <button
                  onClick={removeAll}
                  className="w-full border border-red-300 text-red-500 py-2 rounded-md text-sm mt-3"
                >
                  Remove All
                </button>

              </div>

            )}

          </div>

        </div>

      </section>
    </>
  );
};

export default Technology;